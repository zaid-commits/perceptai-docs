import React from 'react';

interface Heading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (!Array.isArray(headings) || headings.length === 0) {
    return null; // Or return a message saying "No headings available."
  }

  return (
    <nav className="table-of-contents">
      <h4>Table of Contents</h4>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
