import React from 'react';
import { StyledHighlightedText } from './styled';

export interface IHighlightedTitleProps {
  title: string;
  highlight?: string;
}

const HighlightedTitle = (props: IHighlightedTitleProps) => {
  const { title, highlight } = props;
  // split on highlight term and include term into parts, ignore case
  const parts = title?.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    highlight?.length ? 
    <>
    {parts.map(
        (part: string, i: number): React.ReactElement => (
            <StyledHighlightedText
                key={i}
                isHighlighted={part.toLowerCase() === highlight.toLowerCase()}>
                {part}
            </StyledHighlightedText>
        )
    )}
</> :
    <>{title}</>
  );
};

export default HighlightedTitle;
