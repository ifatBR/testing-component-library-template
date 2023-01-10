import React from 'react';
import { TOGGLE_ICON_SIZE } from '../../utils/constants';
import { IIcon } from '../../utils/types';
import { IconContainerStyled } from './styled';

export interface IIconProps {
  Icon : string;
  toggleIconProps?: IIcon;
  onIconClicked?(element: any): void;
}

const Icon = (props: IIconProps) => {
  const { Icon, toggleIconProps, onIconClicked} = props;
  return (
    <IconContainerStyled 
      onClick={onIconClicked}
      height={toggleIconProps?.height} 
      width={toggleIconProps?.width}
      iconFillColor={toggleIconProps?.fillColor}
    >
    <Icon />
  </IconContainerStyled>
  );
};

export default Icon;
