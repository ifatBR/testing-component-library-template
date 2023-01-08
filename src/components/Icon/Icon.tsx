import React, { FunctionComponent } from 'react';
import { IconStyled } from './styled';
import { DEFAULT_ICON_SIZE } from '../../utils/constants';

export interface IIconProps {
  icon: string;
  // icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // children: React.ReactNode;
  width?: number;
  height?: number;
  iconStyle?: {[key:string]: string}
  onIconClick?(): void;
}

const Icon = (props: IIconProps) => {
  const { width, height, icon, iconStyle, onIconClick } = props;

  return (
      <IconStyled 
        src={icon}
        width={width|| DEFAULT_ICON_SIZE}
        height={height|| DEFAULT_ICON_SIZE}
        iconStyle={iconStyle}
        onClick={onIconClick}
      />
      // <div><props.icon/></div>
  );
};

export default Icon;
