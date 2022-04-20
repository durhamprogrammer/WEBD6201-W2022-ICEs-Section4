import express from 'express';
const router = express.Router();
import passport from 'passport';

// controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact-list';

/*************************************** CONTACT-LIST ROUTES************************************************/
/* GET contact-list page. */
router.get('/contact-list', DisplayContactListPage);

/* Display the Add page. */
router.get('/add',  DisplayAddPage);

/* Process the Add request */
router.post('/add',  ProcessAddPage);

/* Display the Edit page with data from DB */
router.get('/edit/:id',  DisplayEditPage);

/* Process the Edit request */
router.post('/edit/:id',  ProcessEditPage);

/* Process the delete request */
router.get('/delete/:id',  ProcessDeletePage);

export default router;
