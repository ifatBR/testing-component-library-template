import React from 'react';
import { TOGGLE_ICON_SIZE } from '../../utils/constants';
import { IIcon } from '../../utils/types';
import { IconContainerStyled } from './styled';

export interface IIconProps {
  Icon : string;
  className?: string;
  iconProps?: IIcon;
  iconStyle?: {[key: string]: string},
  onIconClicked?(element: any): void;
}

const Icon = (props: IIconProps) => {
  const { Icon, className, iconProps, iconStyle, onIconClicked} = props;
  return (
    <IconContainerStyled 
      className={className}
      onClick={onIconClicked}
      height={iconProps?.height} 
      width={iconProps?.width}
      iconFillColor={iconProps?.fillColor}
      iconStyle={iconStyle}
    >
    <Icon />
  </IconContainerStyled>
  );
};

export default Icon;
