import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Cartmes = () => {
  return (
    <StyledWrapper>
      <div className="notifications-container">
        <div className="alert h-40">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 alert-svg">
                <path clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd" />
              </svg>
            </div>
            <div className="alert-prompt-wrap">
              <p className=" text-yellow-700 text-3xl">
               Your Cart Is Empty...
                <NavLink to="/" className="underline text-blue-600"> Please select the Product </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .notifications-container {
    width: 320px;
    height: auto;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .flex {
    display: flex;
  }

  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .alert {
    background-color: rgb(254 252 232);
    border-left-width: 4px;
    border-color: rgb(250 204 21);
    border-radius: 0.375rem;
    padding: 1rem;
  }

  .alert-svg {
    height: 1.25rem;
    width: 1.25rem;
    color: rgb(250 204 21);
  }

  .alert-prompt-wrap {
    margin-left: 0.75rem;
    color: rgb(202 138 4);
  }

  .alert-prompt-link {
    font-weight: 500;
    color: rgb(141, 56, 0);
    text-decoration: underline;
  }

  .alert-prompt-link:hover {
    color: rgb(202 138 4);
  }`;

export default Cartmes;
