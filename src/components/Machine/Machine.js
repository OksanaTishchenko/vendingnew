/** @jsxImportSource @emotion/react */

import { useState, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { modeContext } from "context/modeContext";
import Modal from "components/Modal/Modal";
import Icons from "components/Icons/Icons";
import Goods from "components/Goods/Goods";
import ButtonContainer from "components/ButtonContainer/ButtonContainer";
import Display from "components/Display/Display";
import data from "data/goods.json";
import { setGoods, addCash, clearCash } from "store/actions";
import Request from "request.js";

import { styles } from "./styles";

function Machine() {
  const { isDark, changeIsDark } = useContext(modeContext);
  const [letter, setLetter] = useState("A");
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState("Please select an item from the showcase");
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const goods = useSelector(state => state.goods.goods);
  const userCash = useSelector(state => state.userCash.cash);
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
    resetMessages();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeMode = () => {
    changeIsDark(!isDark);
  }

  const changeCoin = (coin) => {
    dispatch(addCash(+(coin / 100).toFixed(2)));
  }

  const getRequest = (userChange, detailsChange, title) => {
    const request = new Request(userChange.toFixed(2));
    request.get(0.25).get(0.10).get(0.05);
    request.counter.map(item => {
      if (item.count > 0) {
        detailsChange += `${item.bill} cents - ${item.count} coins `;
        setMessage(`Please collect your product ${title}, collect your change $ ${userChange.toFixed(2)}: ${detailsChange}`);
      }
    })
  }

  const resetMessages = () => {
    setLetter("A");
    setNumber(null);
    dispatch(clearCash());
    setTimeout(() => {
      setMessage("Please select an item from the showcase");
    }, 5000);
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
      let details = "";
      getRequest(change, details, good.title);
      resetMessages();
    } else {
      setMessage("Insufficient amount. Please enter additional amount or cancel to abort transaction.");
    }
  }

  useEffect(() => {
    setProductsToStore();
  }, [setProductsToStore]);

  return (
    <div>
      {modalOpen &&
        <Modal close={closeModal} />
      }

      <Icons
        openModal={openModal}
        changeMode={changeMode}
        isDark={isDark}
      />

      <div css={styles.container}>
        <div css={styles.vendingMachine}>
          <div css={styles.glassPanel}>
            <div css={styles.glassShine} />
          </div>

          <Goods
            goods={goods}
            letter={letter}
            number={number}
          />

          <div css={styles.controls}>

            <Display
              message={message}
              letter={letter}
              number={number}
              userCash={userCash}
            />

            <ButtonContainer
              changeLetter={changeLetter}
              changeNumber={changeNumber}
              disabled={disabled}
              pushCancel={pushCancel}
              purchaseHandler={purchaseHandler}
              changeCoin={changeCoin}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Machine;