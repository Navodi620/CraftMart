import React from 'react'
import { Routes, Route} from 'react-router-dom'
import PaymentDashbord from './pages/PaymentDashbord';
import CreatePayment from './pages/CreatePayments';
import ShowPayment from './pages/ShowPayment';
import EditPayment from './pages/EditPayment';
import DeletePayment from './pages/DeletePayment';
import FeedbackDashbord from './pages/FeedbackDashbord';
import CreateFeedback from './pages/CreateFeedback';
import DeleteFeedback from './pages/DeleteFeedback';
import EditFeedback from './pages/EditFeedback';
import FullFeedback from './pages/FullFeedback';
import ReplyFeedback from './pages/ReplyFeedback';
import ShowFeedback from './pages/ShowFeedback';

const App = () => {
  return (
    <Routes>
      <Route path='/paymenthome' element={<PaymentDashbord />} />
      <Route path='/payments/create' element={<CreatePayment />} />
      <Route path='/payments/details/:id' element={<ShowPayment />} />
      <Route path='/payments/edit/:id' element={<EditPayment />} />
      <Route path='/payments/delete/:id' element={<DeletePayment />} />

      <Route path='/feedbackshome' element={<FeedbackDashbord />} />
      <Route path='/feedbacks/create' element={<CreateFeedback />} />
      <Route path='/feedbacks/delete/:id' element={<DeleteFeedback />} />
      <Route path='/feedbacks/edit/:id' element={<EditFeedback />} />
      <Route path='/feedbacks/full' element={<FullFeedback />} />
      <Route path='/feedbacks/reply/:id' element={<ReplyFeedback />} />
      <Route path='/feedbacks/details/:id' element={<ShowFeedback />} />

      <Route path='/feedbacks/details/:id' element={<ShowFeedback />} />
    </Routes>
  )
}

export default App