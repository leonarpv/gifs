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

  a {
    color: -webkit-link;
    cursor: pointer;
    color: white;
  }
`;

const ItemInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  cursor: pointer;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 5;
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

/*

      <a        
        href={res.loadedUrl}
        ref="image"
        title={res.title}
        target="_blank"
        className={classes}
        style={{backgroundColor: backgroundColor}}
      >        
        <div className="image-info-wrapper">
          <div className="image-type">
            <h1>{res.type}</h1>
          </div>
          <div className="image-info">
            <div className="image-title">
              <h1>{res.title}</h1>
            </div>
            <div className="image-url">
              <h1>{res.bitlyUrl}</h1>
            </div>
          </div>
          <div className="image-view-icon">
            <i className="far fa-eye"/>
          </div>
        </div>
        <div className="image-loading-icon-wrapper">
          <div className="image-loading-icon"/>
        </div>
        <img className="loaded-image" src={res.loadedUrl} onLoad={this.handleOnLoad}/>
        <img className="unloaded-image" src={res.unloadedUrl} onLoad={this.handleOnLoad}/>
      </a>
      */
