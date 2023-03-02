import React from 'react'
import { Button } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search">
          <span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="me-3"
            >
              <path
                d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
                stroke="var(--teal)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.0183 18.4851L21.5423 22"
                stroke="var(--teal)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search by name, hobby or role"
          />
        </div>
        <div className="hobby-search">
          <span>Hobby</span>
          <span>
            <svg
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.5L12 15.5L5 8.5"
                stroke="var(--black)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </div>

        <div>
          <Button className="tertiary">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
