import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { Visible } from 'react-grid-system'
import { ReactComponent as Plus } from 'public/assets/icons/accordion-plus.svg'
import Text from '../typography'
import './Terms.less'

const termsData = {
  title: 'NOTE:',
  text:
    'YOU SHOULD REVIEW THESE NYMCARD API TERMS AND CONDITIONS PRECISELY. YOU ARE REQUIRED TO ACCEPT THESE TERMS AND CONDITION IF YOU ACCESS ANY WEBSITE OR APPLICATION PROGRAM INTERFACE (“API”) OF NYMCARD, INCLUDING THE NYMCARD WEBSITE LOCATED AT www.nymcard.com, BY READING YOU WILL HAVE ACCEPTED THESE TERMS AND TO HAVE ENTERED INTO A LEGALLY BINDING CONTRACT WITH NYMCARD. ',
  sections: [
    {
      title: '1. Modifications to the Site',
      description:
        'Nymcard preserves the right to modify or terminate, for the moment or permanently, the Site or any business features without prior notice. You agree that Nymcard will not be responsible for any modification, interruption or discontinuance of the Site or any portion therefrom.',
    },
    {
      title: '2. Modification to the Terms',
      description:
        'Nymcard preserves the right, in its inclusive discretion, to update any provision contained in these Terms. Any modifications will be effective immediately upon posting of the revisions, and you waive any right you may have to receive specific notice of such modifications. You carry on with use of the Site following the publishing of modifications will confirm your acceptance of such modifications; accordingly, you should frequently review these Terms. If you do not agree to the modified Terms, you must stop using the Site. Please contact info@nymcard.com if you have any questions with respect to the use of the Site.',
    },
    {
      title: '3. Privacy Policy',
      description:
        'Your use of the Site shall be subject to the Nymcard privacy policy (“Privacy Policy”) available at https://nymcard.com/privacy. You approve Nymcard to collect, process and store your personal information from your use of the Site in accordance with the terms of the Privacy Policy. You agree to use the Site and any data obtained from the Site in correspondence with Nymcard’s privacy policies.',
    },
    {
      title: '4. Representations and Agreement',
      description:
        'You represent and summons that, if you are using the Site on behalf of any entity, you are authorized to accept these Terms on such entity’s behalf and that such entity will be responsible to Nymcard for any violation of these Terms. You also represent  that you are of the legal age of majority in the authority in which you located.',
    },
    {
      title: '5. Scope of Terms; Relationship of Parties',
      description:
        'These Terms apply exclusively to your access to and use of the Site. These Terms do not alter the terms or conditions of any other agreement you may have with Nymcard. Except that you and Nymcard signed a separate written agreement that expressly override these Terms, either in part or whole, the Terms represent the whole legal agreement between you and Nymcard and regulate your use of the Site. Nothing in these Terms will limit Nymcard’s right to build, attain, license, market, or deliver products, software or technologies that perform the same or interchangeable functions as or otherwise compete with any other products, software or technologies that you may develop, produce, market or deliver.',
    },
    {
      title: '6. Exclusive Rights',
      description:
        'Any logos or slogans on the Site are trademarks of Nymcard and it can not be copied or used, all together or in part, without the prior written approval of Nymcard.',
    },
  ],
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      border: 'none',
      boxShadow: 'none',
      '&:before': {
        width: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      '& .MuiAccordionDetails-root': {
        display: 'block',
      },
      '& .MuiAccordionSummary-expandIcon': {
        transition: 'all 250ms linear',
      },
      '& .MuiAccordionSummary-root': {
        padding: '0',
      },
    },
  }),
)

type termsProps = {
  hidden: boolean
  setTerms: React.Dispatch<React.SetStateAction<boolean>>
}

const Terms: FC<termsProps> = ({ hidden, setTerms }) => {
  const classes = useStyles()
  document.head.parentElement?.classList.add('html-scroll')
  return (
    <div hidden={hidden} className={'terms-overlay'}>
      <div className={'terms-wrapper'}>
        <div className={'terms-header'}>
          <Text.Paragraph className={'terms-title'}>API Terms and Conditions</Text.Paragraph>
        </div>
        <Visible xs sm md lg>
          <div className={'terms-container'}>
            <div style={{ maxWidth: '670px', marginBottom: '45px' }}>
              <Text.Paragraph size={'md'} weight={600} font={'secondary'} style={{ marginBottom: '10px' }}>
                {termsData.title}
              </Text.Paragraph>
              <Text.Paragraph size={'sm'}>{termsData.text}</Text.Paragraph>
            </div>
          </div>
          <div className={'terms-container'}>
            {termsData.sections.map((item, index) => (
              <Accordion key={index} className={classes.root}>
                <AccordionSummary expandIcon={<Plus />} aria-controls='panel1a-content' id='panel1a-header'>
                  <Text.Paragraph font={'secondary'} weight={600} style={{ fontSize: '16px', letterSpacing: '-0.8px' }}>
                    {item.title}
                  </Text.Paragraph>
                </AccordionSummary>
                <AccordionDetails style={{ padding: '0' }}>
                  <Text.Paragraph>{item.description}</Text.Paragraph>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Visible>
        <Visible xl xxl>
          <div className={'terms-container'}>
            <div style={{ maxWidth: '700px' }}>
              <div style={{ maxWidth: '670px', marginBottom: '45px' }}>
                <Text.Paragraph size={'md'} weight={600} font={'secondary'} style={{ marginBottom: '10px' }}>
                  {termsData.title}
                </Text.Paragraph>
                <Text.Paragraph size={'sm'}>{termsData.text}</Text.Paragraph>
              </div>
              {termsData.sections.map((item, index) => (
                <div key={index} style={{ marginBottom: '45px' }}>
                  <Text.Paragraph size={'lg'} weight={600} font={'secondary'} style={{ marginBottom: '16px' }}>
                    {item.title}
                  </Text.Paragraph>
                  <Text.Paragraph>{item.description}</Text.Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Visible>
        <button
          onClick={() => {
            setTerms(!hidden)
            document.head.parentElement?.classList.remove('html-scroll')
          }}
          type={'button'}
          className={'terms-close'}
        />
      </div>
    </div>
  )
}

export { Terms }
