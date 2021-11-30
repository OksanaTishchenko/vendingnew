/** @jsxImportSource @emotion/react */

import { styles } from "./styles";

const Goods = ({ goods, letter, number }) => {
  return (
    <div css={styles.display}>
      {goods &&
        goods.map(item => (
          <div
            key={item.id}
            css={item.title === letter + number
              ? [styles.product, styles.active]
              : styles.product}>
            <img css={styles.image} src="https://pngimg.com/uploads/cocacola/coca_cola_PNG8899.png" alt="img" />
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Goods;