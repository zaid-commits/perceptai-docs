import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const DocsPage: React.FC = () => {
  const { docId } = useParams<{ docId: string }>();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await axios.get(`/docs/${docId}.md`);
        setContent(response.data);
      } catch (error) {
        setContent("Documentation not found.");
      }
    };

    loadMarkdown();
  }, [docId]);

  return (
    <div className="docs-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default DocsPage;
