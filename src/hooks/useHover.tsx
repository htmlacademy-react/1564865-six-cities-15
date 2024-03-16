import { useState } from 'react';

interface HoverHookProps {
  initialOfferId: string | number | null;
}

function useHover({ initialOfferId }: HoverHookProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | number | null>(initialOfferId);

  function handleCardHover(offerId: string | number | null) {
    setHoveredOfferId(offerId);
  }

  return {
    hoveredOfferId,
    handleCardHover,
  };
}

export default useHover;
