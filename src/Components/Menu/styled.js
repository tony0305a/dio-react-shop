import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #a6d1e6;
  align-items:center;
  height: 40px;
  justify-content:center ;

  .dropdown {
    position: relative;
    display: inline-block;
    margin-left:-158px;
    &:hover .dropdown-content {
      display: flex;
    }
    button {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 16px;
        font-weight:bold;
    }
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    justify-content: flex-start;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    ul {
      width: 100%;
      li {
        display: flex;
        width: 100%;
        margin: 8px;
        justify-content: space-between;
        .dropdown-content-list {
          display: none;
          position:absolute;
          left:250px;
          background-color: #f9f9f9;
          justify-content: flex-start;
          min-width: 250px;
          min-height:100%;
          top:0;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        }
        &:hover .dropdown-content-list {
          display: inline-block;
        }
      }
    }
  }

  .list {
    ul {
      display: flex;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 40px;
        &:hover {
          background-color: lightblue;
        }
      }
    }
  }
`;
