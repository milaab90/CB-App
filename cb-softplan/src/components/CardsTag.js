import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TagIcon from './icons/TagIcon';

function MenuDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="cards__tag">
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <TagIcon />
      </Button>
      <Menu id="tag__menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <span>Etiquetar como:</span>
        <MenuItem onClick={handleClose} className="orange">Energia Elétrica</MenuItem>
        <MenuItem onClick={handleClose} className="blue">Possessória</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuDropdown;