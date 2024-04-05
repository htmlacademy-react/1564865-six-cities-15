import { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SortMap } from '../../const';

type SortListProps = {
  activeSortItem: string;
  onSortItems: (label: string) => void;
}

function SortList({ onSortItems, activeSortItem }: SortListProps): JSX.Element {

  const [openSort, setOpenSort] = useState<boolean>(false);

  function handleSortFormClick() {
    setOpenSort((prevOpenSort) => !prevOpenSort);
  }

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && openSort) {
      evt.preventDefault();
      setOpenSort(false);
    }
  }

  function handleSortItemClick(label: string) {
    onSortItems(label);
    setOpenSort(false);
  }

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown={handleKeydown}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortFormClick}>
        {activeSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        { 'places__options--opened': openSort }
      )}
      >
        {Object.entries(SortMap).map(([type, label]) => (
          <li
            key={type}
            className={classNames(
              'places__option',
              { 'places__option--active': activeSortItem === type }
            )}
            tabIndex={0}
            onClick={() => handleSortItemClick(label)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortList;
