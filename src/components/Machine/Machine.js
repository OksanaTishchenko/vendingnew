import React, { useState, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaDollarSign, FaMoon, FaSun } from "react-icons/fa";

import { modeContext } from "context/modeContext";
import Modal from "components/Modal/Modal";
import data from "data/goods.json";
import { setGoods, addCash, clearCash, decrementCount } from "store/actions";
import Request from "request";

import { css } from "@emotion/css";
import styled from "@emotion/styled";

function Machine() {
  const modeCon = useContext(modeContext);
  const [letter, setLetter] = useState("A");
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState("Please select an item from the showcase");
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const goods = useSelector(state => state.goods.goods);
  const userCash = useSelector(state => state.userCash.cash);
  const handover = useSelector(state => state.handover.handover);
  const dispatch = useDispatch();

  const setProductsToStore = useCallback(() => {
    setTimeout(() => {
      dispatch(setGoods(data));
      setDisabled(false);
    }, 2000)
  }, [dispatch]);

  const changeLetter = (letter) => {
    setLetter(letter);
    setNumber(null);
  };

  const changeNumber = (number) => {
    setNumber(number);
    let titleGood = goods.find((item) => {
      return item.title === letter + number
    });
    setMessage("Price of the item $" + titleGood.price.toFixed(2));
  }

  const pushCancel = () => {
    setMessage("Visit us again, amount returned - $" + userCash.toFixed(2));
    setLetter("A");
    setNumber(null);
    dispatch(clearCash());
    setTimeout(() => {
      setMessage("Please select an item from the showcase");
    }, 2000)
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeMode = () => {
    modeCon.changeMode();
    document.body.classList.toggle("sun");
  }

  const changeCoin = (coin) => {
    dispatch(addCash(+(coin / 100).toFixed(2)));
  }

  const purchaseHandler = () => {
    if (!number) {
      return setMessage("No Product selected, please make a selection from the showcase");
    }
    let good = goods.find((item) => {
      return item.title === letter + number
    });
    if (good.price <= userCash) {
      const change = +userCash.toFixed(2) - good.price;
      setMessage(`Please collect your product ${good.title}, collect your change $ ${change.toFixed(2)}. Thank you for shopping with us`);
      setLetter("A");
      setNumber(null);
      dispatch(clearCash());
      setTimeout(() => {
        setMessage("Please select an item from the showcase");
      }, 3000);
      if (change !== 0) {
        const hand = [];
        const request = new Request(change.toFixed(2));
        handover.map(item => {
          if (item.quantity) {
            return hand.push(item);
          }
        });
        const newHandover = hand.map(item => {
          return request.get(item.coin);
        });
        dispatch(decrementCount(newHandover));
      }
    } else {
      setMessage("Insufficient amount. Please enter additional amount or cancel to abort transaction.");
    }
  }

  const Button = styled.button`
    width: calc(33% - 20px);
    height: 60px;
    margin: 10px;
    color: #ffffff85;
    background-color: #6786bf4f;
    border-radius: 10px;
    border: none;
    box-shadow: -2px -2px 6px #ffffff70, 4px 4px 9px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    &:active {
      font-size: 13px;
      box-shadow: inset -3px -3px 7px #ffffff45,
        inset 3px 3px 5px rgba(0, 0, 0, 0.4);
    }
    &:disabled {
      cursor: not-allowed;
    }
  `;

  useEffect(() => {
    setProductsToStore();
  }, [setProductsToStore]);

  return (
    <div>
      {modalOpen &&
        <Modal close={closeModal} />
      }
      <div className={css`
        position: absolute;
        top: 70px;
        right: 70px;
        width: 100px;
        display: flex;
        justify-content: space-between;
      `}>
        <FaDollarSign className={css`
          font-size: 32px;
          color: green;
          cursor: pointer;
        `} onClick={openModal} />

        {!modeCon.mode && //
          <FaMoon className={css`
          font-size: 28px;
          color: yellow;
          cursor: pointer;
        `} onClick={changeMode} />}


        {modeCon.mode && //
          <FaSun className={css`
         font-size: 28px;
         color: orange;
         cursor: pointer;
        `} onClick={changeMode} />}

      </div>
      <div className={css`height: 520px;`}>

        <div className={css`
            width: 900px;
            height: 520px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px;
            background-color: #6a93cb;
            margin: 0 auto;
            position: relative;
            border-radius: 15px;
            box-shadow: -3px -3px 5px #ffffff70, 3px 3px 5px rgba(0, 0, 0, 0.5);
        `}>
          <div className={css`
            position: absolute;
            width: calc(65% - 8px);
            height: calc(100% - 40px);
            z-index: 4;
            top: 19px;
            left: 19px;
            border-radius: 15px;
            background: rgba(0, 0, 0, 0.0525);
            border: 2px solid rgba(0, 0, 0, 0.15);
          `}>
            <div className={css`
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
              border-radius: 15px;
              &::before,
              &::after {
                content: "";
                position: absolute;
                z-index: 1;
              }
              &::before {
                top: -125%;
                right: 0;
                bottom: -108%;
                left: -30%;
                transform-origin: 100% 50%;
                background-image: linear-gradient(
                    to left,
                    transparent 10%,
                    rgba(white, 0.04) 10%,
                    rgba(white, 0.07) 15%,
                    transparent 15%,
                    transparent 20%,
                    rgba(white, 0.06) 20%,
                    rgba(white, 0.1) 25%,
                    transparent 25%
                  ),
                  linear-gradient(to left, rgba(black, 0) 0.5%, rgba(black, 0.4) 130%);
          
                transform: translate(0%, #{(100% / 6)}) rotate(45deg);
                transition: transform 550ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
              }
            `} />
          </div>
          <div className={css`
              width: 65%;
              height: 500px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              border-radius: 10px;
              padding: 10px;
              background: rgba(255, 255, 255, 0.02);
              box-shadow: inset -2px -2px 7px #ffffff25,
                inset 3px 3px 6px rgba(0, 0, 0, 0.4);
          `}>
            {goods &&
              goods.map(item => (
                <div
                  key={item.id}
                  className={item.title === letter + number
                    ? css`
                      width: calc(16.667% - 25px);
                      height: 130px;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      align-items: center;
                      margin: 10px;
                      color: #ffffff90;
                      background-color: #6a93cb;
                      border-radius: 5px;
                      border: none;
                      box-shadow: -2px -2px 3px #ffffff35, 4px 4px 5px rgba(0, 0, 0, 0.3);
                      font-weight: 500;
                      font-size: 16px;
                      outline: none;
                      transition: all 200ms;

                      background: #1b62c460;
                      box-shadow: -4px -5px 10px #ffffff35, 5px 6px 10px rgba(0, 0, 0, 0.3);
                      width: calc(16.667% - 15px);
                      height: 140px;
                      
                    `
                    : css`
                      width: calc(16.667% - 25px);
                      height: 130px;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      align-items: center;
                      margin: 10px;
                      color: #ffffff90;
                      background-color: #6a93cb;
                      border-radius: 5px;
                      border: none;
                      box-shadow: -2px -2px 3px #ffffff35, 4px 4px 5px rgba(0, 0, 0, 0.3);
                      font-weight: 500;
                      font-size: 16px;
                      outline: none;
                      transition: all 200ms;
                    `}>
                  <img src="https://pngimg.com/uploads/cocacola/coca_cola_PNG8899.png" alt="img" className={css`width: auto; height: 60%;`} />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className={css`
              width: calc(35% - 40px);
              display: flex;
              flex-direction: column;
          `}>
            <div className={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-family: "Orbitron", sans-serif;
                width: calc(100% - 30px);
                height: 100px;
                border-radius: 10px;
                color: #ffffff85;
                text-align: center;
                white-space: pre-line;
                padding: 12px 8px;
                background: rgba(255, 222, 239, 0.09);
                box-shadow: inset -2px -2px 4px #ffffff20,
                inset 2px 2px 6px rgba(0, 0, 0, 0.4);
            `}>
              <div className={css`
                font-size: 0.85em;
              `}>
                {message}
              </div>
              <div className={css`
                  display: flex;
                  justify-content: space-around;
                  font-size: 0.8em;
              `}>
                <div>

                  Item : {letter}{number}
                </div>
                <div>Amount Inserted : $ {userCash.toFixed(2)} </div>
              </div>
            </div>
            <div className={css`
                width: 100%;
                height: 400px;
                padding-top: 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            `}>
              <Button onClick={() => changeLetter("A")}>A</Button>
              <Button onClick={() => changeLetter("B")}>B</Button>
              <Button onClick={() => changeLetter("C")}>C</Button>
              <Button disabled={disabled} onClick={() => changeNumber(1)} className={css`height: 40px;`}>1</Button>
              <Button disabled={disabled} onClick={() => changeNumber(2)} className={css`height: 40px;`}>2</Button>
              <Button disabled={disabled} onClick={() => changeNumber(3)} className={css`height: 40px;`}>3</Button>
              <Button disabled={disabled} onClick={() => changeNumber(4)} className={css`height: 40px;`}>4</Button>
              <Button disabled={disabled} onClick={() => changeNumber(5)} className={css`height: 40px;`}>5</Button>
              <Button disabled={disabled} onClick={() => changeNumber(6)} className={css`height: 40px;`}>6</Button>
              <Button onClick={() => changeCoin(25)} className={css`height: 40px;`}>&#162;25</Button>
              <Button onClick={() => changeCoin(10)} className={css`height: 40px;`}>&#162;10</Button>
              <Button onClick={() => changeCoin(5)} className={css`height: 40px;`}>&#162;5</Button>
              <Button onClick={pushCancel} className={css`width: calc(50% - 20px)!important; background: #ff6d6d4f!important;`}>Cancel</Button>
              <Button onClick={purchaseHandler} className={css`width: calc(50% - 20px)!important; background: #4eadb24f!important;`}>Purchase</Button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Machine;