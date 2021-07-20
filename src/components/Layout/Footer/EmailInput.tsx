import Image from 'next/image'
import React, { FC, useState } from 'react'
import './EmailInput.less'
// import EmailIcon from '../../icon/images/Email.svg'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { ContactThanks } from '../../ContactUs/ContactThanks'
import { createEmailSubscription } from '../../../api/emailSubscriptions'

type FooterInputProps = Record<string, undefined>

const EmailInput: FC<Partial<FooterInputProps>> = () => {
  const useStyles = makeStyles(() => ({
    root: {
      '& .MuiFormLabel-root': {
        color: '#fff',
      },
      '& .MuiInput-underline:before': {
        borderBottom: '1px solid #fff',
      },
      '& .MuiInput-underline:after': {
        borderBottom: '1px solid #60C8D6',
      },
      '& .MuiInput-underline.Mui-focused:after': {
        borderBottom: '1px solid #60C8D6',
      },
      '& .MuiInputBase-input': {
        color: '#fff',
        paddingRight: '27px',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: '1px solid #fff',
      },
    },
  }))

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [thanks, setThanks] = useState(true)

  const footerInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(event.target.value)
  }

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = {email, name:''}
    createEmailSubscription(formData).then(() => {
      setThanks(false)
      setEmail('') 
    })
      .catch(err => {
        console.log('something wrong', err)
      })
  }

  return (
    <>
      <form
        onSubmit={sendEmail}
        style={{ display: 'flex', alignItems: 'inherit', width: '100%', position: 'relative' }}
      >
        <TextField
          fullWidth
          type='email'
          required
          className={classes.root}
          id='standard-email'
          label='Email'
          value={email}
          onChange={footerInput}
        />
        <Button
          type='submit'
          style={{
            padding: '0',
            width: '32px',
            height: '32px',
            minWidth: '32px',
            marginLeft: '8px',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-40%)',
          }}
        >
          {/* <img src={EmailIcon} width='32' height='32' /> */}
          <Image
                    src="/assets/images/icons/Email.svg"
                    width="32"
                    height="32"
                  >
                  </Image>
        </Button>
      </form>
      <ContactThanks footer={true} thanks={thanks} setThanks={setThanks} />
    </>
  )
}

export { EmailInput }
