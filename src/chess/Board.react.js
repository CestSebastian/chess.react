/**
 * @flow
 */

import React, { Component } from 'react';
import Piece from './Piece.react';
import './Board.css';

class Board extends Component {
  props: {};
  state: {
    game_state: Array<Array<{
      type: 'king' | 'queen' | 'rook' | 'knight' | 'bishop' | 'pawn',
      color: 'black' | 'white',
    }>>,
  };
  constructor(props: {}) {
    super(props);
    this.state = {
      game_state: [
        [
          {
            type: 'rook',
            color: 'black',
          },
          {
            type: 'knight',
            color: 'black',
          },
          {
            type: 'bishop',
            color: 'black',
          },
          {
            type: 'queen',
            color: 'black',
          },
          {
            type: 'king',
            color: 'black',
          },
          {
            type: 'bishop',
            color: 'black',
          },
          {
            type: 'knight',
            color: 'black',
          },
          {
            type: 'rook',
            color: 'black',
          },
        ],
        [
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
          {
            type: 'pawn',
            color: 'black',
          },
        ],
        [],
        [],
        [],
        [],
        [
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
          {
            type: 'pawn',
            color: 'white',
          },
        ],
        [
          {
            type: 'rook',
            color: 'white',
          },
          {
            type: 'knight',
            color: 'white',
          },
          {
            type: 'bishop',
            color: 'white',
          },
          {
            type: 'queen',
            color: 'white',
          },
          {
            type: 'king',
            color: 'white',
          },
          {
            type: 'bishop',
            color: 'white',
          },
          {
            type: 'knight',
            color: 'white',
          },
          {
            type: 'rook',
            color: 'white',
          },
        ],
      ],
    };
  }

  render() {
    return (
      <div className="Board">
        <table>
          <tbody>
            {[...Array(8)].map((_, rKey) => (
              <tr key={rKey}>
                {[...Array(8)].map((_, cKey) => (
                  <td key={cKey}>
                    {
                      this.state.game_state[rKey][cKey] &&
                      <Piece
                        type={this.state.game_state[rKey][cKey].type}
                        color={this.state.game_state[rKey][cKey].color} />
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
