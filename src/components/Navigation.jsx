'use client'
import React from 'react'
import '../styles/Navigation.scss'

export default function Navigation({ total, perPage, current, onChange }) {
    const totalPages = Math.ceil(total / perPage);

    const isFirstPage = current === 1;
    const isLastPage = current === totalPages;

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages && page !== current) {
            onChange(page);
        }
    };

    return (
        <div className="navigation">
            <button
                className={`nav-button ${isFirstPage ? 'disabled' : ''}`}
                onClick={() => goToPage(1)}
                disabled={isFirstPage}
            >
                ⏮
            </button>

            <button
                className={`nav-button ${isFirstPage ? 'disabled' : ''}`}
                onClick={() => goToPage(current - 1)}
                disabled={isFirstPage}
            >
                ◀
            </button>

            <span className="page-number">{current}</span>

            <button
                className={`nav-button ${isLastPage ? 'disabled' : ''}`}
                onClick={() => goToPage(current + 1)}
                disabled={isLastPage}
            >
                ▶
            </button>

            <button
                className={`nav-button ${isLastPage ? 'disabled' : ''}`}
                onClick={() => goToPage(totalPages)}
                disabled={isLastPage}
            >
                ⏭
            </button>
        </div>
    );
}
