/**
 * @flow
 */

import React from 'react';
import type {PieceColor} from './PieceColor';
import type {PieceType} from './PieceTypes';
import PieceCodes from './PieceCodes';
import './Piece.css'

type Props = {
  type: PieceType,
  color: PieceColor,
};

function Piece(props: Props) {
  let piece_code = PieceCodes[props.color][props.type];

  return (
    <div className="Piece">
      {piece_code}
    </div>
  );
}

export default Piece;
