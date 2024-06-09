import { getGoogleSheetsData } from '@/lib/gsheets';
import { CheckIcon, CrossIcon, OngoingIcon, QuestionMarkIcon } from './icons';
import { CELL_COLORS, TEXT_COLORS, RATING_THRESHOLDS } from '../consts';

const getCellColor = (value: string): string => CELL_COLORS[value] || '';

const getEnjoymentColor = (value: string): string => {
  const ratingNumber = parseInt(value.split('/')[0]);
  if (!isNaN(ratingNumber)) {
    const thresholds = RATING_THRESHOLDS.ENJOYMENT;
    if (ratingNumber >= thresholds[0]) return TEXT_COLORS.CYAN;
    else if (ratingNumber >= thresholds[1]) return TEXT_COLORS.GREEN;
    else if (ratingNumber >= thresholds[2]) return TEXT_COLORS.YELLOW;
    else return TEXT_COLORS.RED;
  } else return '';
};

const getWorstFailColor = (value: string): string => {
  const worstFailNumber = parseInt(value.split('%')[0]);
  if (!isNaN(worstFailNumber)) {
    const thresholds = RATING_THRESHOLDS.WORST_FAIL;
    if (worstFailNumber >= thresholds[0]) return TEXT_COLORS.RED;
    else if (worstFailNumber >= thresholds[1]) return TEXT_COLORS.YELLOW;
    else return TEXT_COLORS.GREEN;
  } else return '';
};

const getCompletionIcon = (value: string): JSX.Element => {
  switch (value) {
    case 'TRUE':
      return <CheckIcon />;
    case 'ONGOING':
      return <OngoingIcon />;
    case 'MAYBE':
      return <QuestionMarkIcon />;
    default:
      return <CrossIcon />;
  }
};

export default async function Table() {
  const range = `A2:H`;
  const extremes = await getGoogleSheetsData(range).catch((error) => {
    console.error('Error fetching Google Sheets data:', error);
    return [];
  });

  return (
    <div className="relative w-full overflow-x-auto lg:w-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
        <thead className="sticky top-0 text-xm text-gray-600 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {[
              '#',
              'Level',
              '100%',
              'Attempts',
              'Enjoyment',
              'Worst Fail',
              'Skills',
              'Extras / Fun Facts',
            ].map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {extremes?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0
                  ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                  : 'bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-4 text-center font-bold whitespace-nowrap 
                    ${cellIndex === 0 ? 'bg-gray-700' : ''} 
                    ${cellIndex === 1 ? 'text-gray-200' : ''} 
                    ${cellIndex === 2 ? getCellColor(cell) : ''}
                    ${cellIndex === 4 ? getEnjoymentColor(cell) : ''} 
                    ${cellIndex === 5 ? getWorstFailColor(cell) : ''}`}
                >
                  <div className="flex justify-center">
                    {cellIndex === 2 ? getCompletionIcon(cell) : cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
