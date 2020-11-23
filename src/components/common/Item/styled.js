import styled from "styled-components";

const ItemWrapper = styled.div`
  animation: fadeIn 0.4s linear;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  display: inline-block;
  height: 200px;
  margin-left: 20px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: unset;
    color: white;
  }
`;

const ItemInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 5;
  .image-view-icon {
    background-color: rgba(black, 0.7);
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    width: 100%;
    i {
      color: white;
      font-size: 3em;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;

const ItemInfo = styled.div`
  bottom: 0px;
  left: 0px;
  margin: 5px;
  position: absolute;
  width: 100%;
  z-index: 2;
  h1 {
    text-transform: capitalize;
    font-size: 1em;
  }
`;

const ItemImage = styled.img`
  max-width: 100%;
`;

export { ItemWrapper, ItemInfoWrapper, ItemInfo, ItemImage };
