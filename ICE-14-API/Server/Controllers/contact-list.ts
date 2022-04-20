import express, {Request, Response, NextFunction } from 'express';

import Contact from '../Models/contact';

// Display Pages

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
 // R - Read
 Contact.find((err, contactList) => {
     if (err) {
       console.error("Error Encountered: " + err.message);
       res.end();
     }

     res.json({ success: true, msg: 'Contact List Displayed Successfully', contacts: contactList, user: req.user });
   });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
  res.json({success: true, msg: 'Add Page Displayed Successfully', user: req.user});
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db and read the contact in
    Contact.findById(id, {}, {}, (err, contactToEdit) => {
        if (err) {
          console.error(err);
          res.end(err);
        }

        // show the edit view with the data
        res.json({ success: true, msg: 'Edit Page Displayed Successfully', contact: contactToEdit, user: req.user });
      });  
}

// Process Pages
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new contact to add
    let newContact = new Contact
    ({
    "FullName": req.body.fullName,
    "ContactNumber": req.body.contactNumber,
    "EmailAddress": req.body.emailAddress
    });

    // db.contacts.insert
    Contact.create(newContact, (err) => {
        if (err) {
          console.error(err);
          res.end(err);
        }
        res.json({ success: true, msg: 'Add Page Processed Successfully', contact: newContact, user: req.user });
      });
}

export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new contact to edit
    let updatedContact = new Contact
    ({
      "_id": id,
      "FullName": req.body.fullName,
      "ContactNumber": req.body.contactNumber,
      "EmailAddress": req.body.emailAddress
    });

    Contact.updateOne({_id:id}, updatedContact, (err: ErrorCallback) => {
        if (err) {
          console.error(err);
          res.end(err);
        }

        res.json({ success: true, msg: 'Edit Page Processed Successfully', contact: updatedContact, user: req.user });
      });  
}

export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err) {
          console.error(err);
          res.end(err);
        }

        res.json({ success: true, msg: 'Delete Page Processed Successfully', contactID: id, user: req.user });
      });  
}