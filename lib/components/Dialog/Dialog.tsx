import * as React from "react";
import { Dialog } from "radix-ui";
import "./styles.css";

interface DialogDemoProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  modal?: boolean;
  title?: string;
  description?: string;
}

const DialogDemo: React.FC<DialogDemoProps> = ({
  children,
  open,
  onOpenChange,
  defaultOpen,
  modal = true,
  title,
  description,
}) => (
  <Dialog.Root
    open={open}
    onOpenChange={onOpenChange}
    defaultOpen={defaultOpen}
    modal={modal}
  >
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        {title && (
          <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
        )}
        {description && (
          <Dialog.Description className="DialogDescription">
            {description}
          </Dialog.Description>
        )}
        {children}
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            X
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
