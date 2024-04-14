import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAddToFavoriteAction } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { checkAuthorizationStatus } from '../../utils/utils';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { AppRoute, NameBlockForFavoriteButton } from '../../const';
import { changeOfferFavoriteStatus } from '../../store/data-process/data-process';
import { TOfferPreview } from '../../types/offer-preview';

type FavoriteButtonBlock = 'default' | 'offer';

type FavoriteButtonProps = {
 id: TOfferPreview['id'];
 isFavorite: boolean;
 nameBlock: NameBlockForFavoriteButton;
 size?: FavoriteButtonBlock;
}

const buttonSize: Record<FavoriteButtonBlock, {width: string; height: string}> = {
  default: { width: '18', height: '19' },
  offer: { width: '31', height: '33' },
};

function FavoriteButton({ id, isFavorite, nameBlock, size = 'default' }: FavoriteButtonProps): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = useMemo(() => checkAuthorizationStatus(authorizationStatus), [authorizationStatus]);

  function handleFavoriteButtonClick() {
    if (!isLogged) {
      navigate(AppRoute.Login);
    }

    dispatch(changeOfferFavoriteStatus({ id, nameBlock }));
    dispatch(fetchAddToFavoriteAction({ id, status: Number(!isFavorite) }));
  }

  return (
    <button
      type="button"
      role="button"
      aria-label="Favorites button"
      onClick={handleFavoriteButtonClick}
      className={`${nameBlock}__bookmark-button button ${isFavorite && `${nameBlock}__bookmark-button--active`}`}
    >
      <svg
        className={`${nameBlock}__bookmark-icon`}
        {...buttonSize[size]}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button >
  );
}

export default FavoriteButton;
