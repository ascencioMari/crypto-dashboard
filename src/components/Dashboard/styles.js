import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UserInfo = styled.section`
  position: relative;
  text-align: right;

  > button {
    &:hover + div {
      height: auto;
      opacity: 1;
      overflow: visible;
    }
  }

  > div {
    min-width: 300px;
    position: absolute;
    height: 0;
    overflow: hidden;
    right: 0;
    opacity: 0;
    transition: all 0.3s ease;
    background-color: var(--secondary-lighter);

    ol {
      margin: 1rem 0 0;
      padding: 1rem;
      list-style: none;
      box-shadow: -1rem -1rem 1rem #fff, 1rem 1rem 1rem #f1f1f1;
      border-radius: 0.5rem;

      > li {
        display: flex;

        > strong {
          width: 30%;
          text-align: left;
          color: var(--primary);
        }

        > span {
          flex: 1;
          text-align: left;
        }
      }
    }
  }
`;

export const TabContainer = styled.section`
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;

  > ul {
    display: flex;
    list-style: none;
    margin: 0 0 1rem;
    padding: 0;

    > li {
      padding: 0 1rem 0 0;
    }
  }

  > ol {
    margin: 0;
    padding: 0;
    list-style: none;

    > li {
      display: none;
      box-shadow: -1rem -1rem 1rem #fff, 1rem 1rem 1rem #f1f1f1;
      opacity: 0;
      transition: all 0.3s ease;
      padding: 1rem;
      border-radius: 0.5rem;

      &.active {
        display: block;
        opacity: 1;
      }
    }
  }
`;

export const Tab = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  > li {
    border: 1px solid var(--secondary-light);

    @media (min-width: 600px) {
      width: calc(50% - 0.5rem);
    }

    h2 {
      margin: 0;
      background-color: #fff;
      padding: 1rem;
      text-align: center;
      color: var(--primary);
      border-bottom: 1px solid var(--secondary-light);

      span {
        font-weight: 300;
      }
    }

    ol {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem;
        border-bottom: 1px solid var(--secondary-light);
        font-size: 0.75rem;
        display: flex;
        justify-content: space-between;

        &:last-child {
          border-bottom: 0 none;
        }
      }
    }
  }
`;

export const ConverterContainer = styled.section`
  padding: 1rem;

  h2 {
    margin: 0 0 2rem;
  }

  ul {
    list-style: none;
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: -1rem -1rem 1rem #fff, 1rem 1rem 1rem #f1f1f1;
    gap: 1rem;
    border-radius: 0.5rem;

    li {
      width: calc(33.3333% - 0.66rem);

      strong {
        color: var(--primary);
      }
    }
  }
`;
