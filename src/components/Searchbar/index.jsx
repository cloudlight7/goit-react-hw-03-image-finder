
import { Formik, Form, Field } from 'formik'
import { Container,Input, Button, Error } from './SearchStyle.module';

function validateText(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid word';
     
    // alert('sgdsdgvkdsvksdvhksjd')
    // value.resetForm();
     
   }
   return error;
 }
const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (values, actions) => {
   //console.log(values);
   onSubmit(values);
   actions.resetForm();
  }

 
  return (
    
    <Formik initialValues={{ values: '' }} onSubmit={handleSubmit}>
				 {({ errors, touched }) => (
					<Form >
						<Container className='mb-3'>
            <Input name='values' type='text' validate={validateText} />
            {errors.values && touched.values ? (
             <Error>{errors.values}</Error> 
           ) : null}
						<Button type='submit'className='btn btn-primary mb-5' disabled={isSubmitting}>
							Search
						</Button>
              </Container>
					</Form>
				
			)}
		</Formik>
	)
}

export default Searchbar
