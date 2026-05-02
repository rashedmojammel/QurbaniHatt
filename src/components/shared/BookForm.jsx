"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import { User } from "@gravity-ui/uikit";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function UpdateUserModal() {
 const onSubmit = async (e) =>
 {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
        name ,
        image
      })
 }
  return (
    <Modal>
      <Button variant="secondary">Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
            
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <User className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update form</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4" >
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  
                  <TextField className="w-full" name="image" type="url">
                    <Label>Photo Url</Label>
                    <Input placeholder="Enter your photo url" />
                  </TextField>
                <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                  
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}