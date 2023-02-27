import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Header = () => {
  const handlePath = (path) => {
    window.open(`/${path}`, '_blank')
  }
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className="header fixed-top ">
      <div>Logo</div>
      {/* responsive */}
      <div className="menu-dropdown">
        <button
          class="btn btn-primary header-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="var(--black)"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
          </svg>
        </button>
      </div>

      <div
        style={{ zIndex: 1030 }}
        onClick={() => setShowDrawer(!showDrawer)}
        className={` modal-backdrop black-bg ${showDrawer ? 'show' : 'fade'}`}
      ></div>
      <div
        className={`offcanvas side-drawer offcanvas-start ${
          showDrawer ? 'show' : 'fade'
        }`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="d-flex justify-content-end w-100">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                fill="var(--black)"
                aria-hidden="true"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="offcanvas-body">
          <a className="w-100 d-inline-block d-flex justify-content-between">
            <span>
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.0183 18.4851L21.5423 22"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>{' '}
              Find a Hobby
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a className="w-100 d-inline-block d-flex justify-content-between">
            <span>
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3344 2.75018H7.66543C4.64443 2.75018 2.75043 4.88918 2.75043 7.91618V16.0842C2.75043 19.1112 4.63543 21.2502 7.66543 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91618C21.2504 4.88918 19.3644 2.75018 16.3344 2.75018Z"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.62726"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Become a hobbyist{' '}
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a className="w-100 d-inline-block d-flex justify-content-between">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M9.80492 17.2954C13.9418 17.2954 17.2954 13.9418 17.2954 9.80492C17.2954 5.66805 13.9418 2.31445 9.80492 2.31445C5.66805 2.31445 2.31445 5.66805 2.31445 9.80492C2.31445 13.9418 5.66805 17.2954 9.80492 17.2954Z"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.0156 15.4043L17.9523 18.3334"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.75398 11.0334C11.2933 11.0334 12.5412 9.78549 12.5412 8.24617C12.5412 6.70685 11.2933 5.45898 9.75398 5.45898C8.21466 5.45898 6.9668 6.70685 6.9668 8.24617C6.9668 9.78549 8.21466 11.0334 9.75398 11.0334Z"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 15C4.99925 14.8041 5.37667 14.5203 5.46175 14.3437C5.72872 13.8098 6.48158 13.5268 7.10629 13.3987C7.55684 13.3026 8.0136 13.2383 8.47319 13.2065C9.32406 13.1317 10.1799 13.1317 11.0308 13.2065C11.4903 13.2387 11.9471 13.3029 12.3977 13.3987C13.0224 13.5268 13.7752 13.7831 14.0422 14.3437C14.2133 14.7035 14.457 15.0189 14.4996 15.5"
                  stroke="var(--grey-2)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Hire talents{' '}
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="menu">
        <div className="d-flex mb-0">
          <a
            href=""
            className="px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark "
          >
            <span>Hire talents</span>
          </a>

          <a
            href=""
            className="px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark "
          >
            <span>Become a hobbyist</span>
          </a>

          <a
            href=""
            className="px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark"
          >
            <span>Find a hobby</span>
          </a>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            onClick={() => handlePath('login')}
            type="button"
            variant="primary"
            className="fw-semibold px-4 me-1 py-1"
          >
            Log in
          </Button>
          <Button
            onClick={() => handlePath('signup')}
            type="button"
            variant="secondary"
            className="fw-semibold px-4 py-1"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export { Header }
