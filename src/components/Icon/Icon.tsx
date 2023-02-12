import React from 'react';
import { IIcon } from '../../utils/types';
import { IconContainerStyled } from './styled';

export interface IIconProps {
  Icon : string;
  className?: string;
  iconProps?: IIcon;
  iconStyle?: {[key: string]: string},
  iconPathStyle?: {[key: string]: string},
  onIconClicked?(element: any): void;
}

const Icon = (props: IIconProps) => {
  const { Icon, className, iconProps, iconStyle, iconPathStyle, onIconClicked} = props;
  return (
    <IconContainerStyled 
      className={className}
      onClick={onIconClicked}
      height={iconProps?.height} 
      width={iconProps?.width}
      iconStyle={iconStyle}
      iconPathStyle={iconPathStyle}
    >
    <Icon/>
  </IconContainerStyled>
  );
};

export default Icon;
