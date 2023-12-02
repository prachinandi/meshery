import React, { useEffect, useState } from 'react';
import { DialogContent, Dialog } from '@material-ui/core';

import theme from '../../../themes/app.js';
import CustomizedSteppers from './stepper/index.js';

const RegisterConnectionModal = ({ handleOpen, connectionMetadata }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleOpen(() => {
      setOpen(true);
    });
  }, [handleOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        style={{ zIndex: 9999 }}
        PaperProps={{
          style: { borderRadius: 30 },
        }}
      >
        <DialogContent
          style={{
            padding: '0 1.5rem 1.5rem',
            borderRadius: '28px',
            border: `6px solid ${theme.palette.secondary.success}`,
          }}
        >
          <CustomizedSteppers connectionMetadata={connectionMetadata} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterConnectionModal;