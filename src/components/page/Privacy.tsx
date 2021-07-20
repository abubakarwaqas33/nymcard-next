import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { Visible } from 'react-grid-system'
import { ReactComponent as Plus } from 'public/assets/icons/accordion-plus.svg'
import Text from '../typography'
import './Privacy.less'

const privacyData = {
  text: [
    'Nymcard offers services that enable platforms and merchants to run businesses, and to Securely conduct online payment transactions.',
    'This policy also describes how we use collected information, with whom we share it, your rights, and how you can contact us about our privacy policy and execution. This policy is solely for Nymcard, it does not apply to third-party websites, products, or services, even if they link to our Services or Sites, and you should consider the privacy practices of those third-parties thoroughly.',
  ],
  items: [
    {
      title: '1. Overview.',
      sections: [
        {
          title: '',
          description: [
            'Nymcard obtains Personal information about you from various sources to provide Services and to manage Site.',
          ],
          items: [],
        },
      ],
    },
    {
      title: '2. Personal Information.',
      sections: [
        {
          title: 'a. Personal information about you we gather and keep.',
          description: [
            'Personal information is any data that relates to an identified individual. The Personal information that you share directly with us through our Sites and Services will be presumed from the conditions in which you provide the information. Such as:',
          ],
          items: [
            'We collect your full name, email address, and account log-in credentials when you sign-up for a Nymcard Account.',
            'We collect your full name, work email, country when you fill-in our online form to contact our sales team.',
          ],
        },
        {
          title: '',
          description: [
            'Our Sites use cookies to function smoothly. It is to store information about your use of our Sites, including:',
          ],
          items: [
            'Your browser and device data, such as your IP address, your device type, your operating system and roInternet browser type, operating system details like name and version.',
          ],
        },
      ],
    },
    {
      title: '3. How We Use Personal information.',
      sections: [
        {
          title: 'a. Our products and services.',
          description: [
            'We use Personal Information to facilitate the business connections we have with our Users, to comply with our financial regulatory and other legal obligations, and to pursue our legitimate business interests.',
          ],
          items: [],
        },
        {
          title: 'b. Events and marketing communications.',
          description: [
            'We may send you our marketing communications emails about the products and services, invitations to participate in surveys or events. Also, we can communicate with you for marketing purposes.',
            'For example, when we collect your business contact details through our participation at an event, we can use this information to follow-up with you with respect to an event, send you information that you have requested about our products and services and, with your consent, include you on our marketing knowledge campaigns.',
          ],
          items: [],
        },
        {
          title: 'c. Publication and Advertising.',
          description: [
            'When you visit our Sites, Nymcard (and its service providers) may use personal information gathered from you and your device to target advertisements for Nymcard Services to you on our Sites. For example, when you visit our Site, we will identify you and your device with cookies and push advertisements of our Services to you. Nymcard does not respond to any non-recognized industry standard browser signals like “DO NOT TRACK”.',
            'We do not share, use, sell or rent the personal information of our user’s/ customers or site visitors for targeted advertisements.',
          ],
          items: [],
        },
      ],
    },
    {
      title: '4. How We Exhibit Personal Information.',
      sections: [
        {
          title: '',
          description: [
            'Nymcard does not rent or sell Personal Information to marketers or autonomous third parties. We share your Personal Information with trusted units, as mentioned below.',
          ],
          items: [],
        },
        {
          title:
            'a. Nymcard shares personal information with other Nymcard institutions in order to provide our Services and for internal administration usefulness.',
          description: [],
          items: [],
        },
        {
          title:
            ' b. Business consort. We share personal information with third party business consorts and partners when this is required to provide our Services to our Users. Examples of third parties providers to whom we can disclose Personal Information for this reason are banks and payment network providers (such as Visa, Mastercard & etc.) when we provide payment card issuing and processing services.',
          description: [],
          items: [],
        },
        {
          title:
            'c. Service providers. We share personal information with a finite number of our service providers. On our behalf we have service providers that provide services, such as website hosting, identity authentication services, information technology and related infrastructure, customer service, email delivery services, and compliance and auditing services. These service providers may need to access Personal Information to execute their services. Such service providers are marked as authorized service providers to use or exhibit the Personal Information only as necessary to execute services on our behalf or go along with legal requirements.',
          description: [],
          items: [],
        },
        {
          title:
            'd. Our users and third parties authorized by our Users. We share necessary personal information with users to maintain a user account and provide the services.',
          description: [],
          items: [],
        },
        {
          title:
            'e. Corporate Agreements. In the event that we enter into, or aim to enter into, an activity that change our business structure, such as a restructuring, affiliation, sale, collaboration, change of control, or other placement of all or any segment of our business or assets, we may share Personal Information with third parties in connection with such activities. Any other entity which acquires us or part of our business will have the right to continue to use your personal information, but only in the practices set out in this Privacy Policy unless you agree otherwise.',
          description: [],
          items: [],
        },
        {
          title: 'f. Compliance and damage anticipation. We share Personal Information as we conclude obligatory:',
          description: [
            '(a) to enforce our legal rights; ',
            '(b) to comply with relevant law, or payment method rules;',
            '(c) to safeguard the rights, privacy, safety and property of Nymcard, it’s Users or others;',
            '(e) to answer questions from courts, regulatory firms, law enforcement firms, and other public and government authorities, which may include authorities outside your country of residence. ',
          ],
          items: [],
        },
      ],
    },
    {
      title: '5. Your Rights and Decisions.',
      sections: [
        {
          title: '',
          description: [
            'You have decision taking rights regarding our use and disclosure of your personal information:',
            'a. If you no longer want to receive marketing-related emails from us, you may quit via the unsubscribe link included in such emails. We will try to comply with your request(s) as early as reasonably possible. Please note that if you unsubscribe our email, we may still send you important executive messages that are required to provide you with our services.',
            'b. How you can see or change your account Personal Information. If You would like to review or update personal information that you have previously shared to us, You may do so by signing in to your Nymcard account. ',
          ],
          items: [],
        },
      ],
    },
    {
      title: '6. Security, Dependability and Reservation.',
      sections: [
        {
          title: '',
          description: [
            'We make appropriate attempts to ensure a level of security is suitable to the risk associated with the processing of Personal Information. We maintain organizational, technical and administrative measures designed to protect personal information within our organization against unauthorized access, loss or modification. Your personal information is only attainable to a limited number of people who need access to the information to perform their responsibilities. Unfortunately, no data transmission or storage system can be guaranteed to be 100% reliable.',
            'We retain your personal information as long as we are providing the Services to you. We keep personal information after we terminate providing Services directly or indirectly to you, even if you close your Nymcard account. We also keep personal information to comply with our financial, accounting and tax reporting duties, where we are required to keep the information by our contractual bonds to our financial partners, and where data retention is sanctioned by the payment methods that we support.',
          ],
          items: [],
        },
      ],
    },
    {
      title: '7. Age Limitation.',
      sections: [
        {
          title: '',
          description: ['The age limitation to use Nymcard Services is above 18 (Eighteen) years.'],
          items: [],
        },
      ],
    },
    {
      title: '8. Updates To this Privacy Policy and Notifications.',
      sections: [
        {
          title: '',
          description: [
            'We may change this Privacy Policy from regularly to demonstrate new services and updates in our Personal Information practices or applicable laws. The “last updated” legend of this Privacy Policy shows when this Privacy Policy was last modified. Any changes are effective when we post the revised Privacy Policy on the Services. We can provide you with announcements and alerts regarding the Privacy Policy or Personal Information gathered by posting them on our website and, if you are a User, by email address listed in your Nymcard account.',
          ],
          items: [],
        },
      ],
    },
    {
      title: '9. Links To Other Websites.',
      sections: [
        {
          title: '',
          description: [
            'The Services may provide the ability to connect to other websites. These websites may operate independently from us and may have their own privacy notices or policies, which we strongly suggest you review. If any linked website is not owned or controlled by us, we are not responsible for its content, any use of the website or the privacy practices of the operator of the website.',
          ],
          items: [],
        },
      ],
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
      '& .MuiAccordionSummary-root': {
        padding: '0',
      },
      '& .MuiAccordionDetails-root': {
        display: 'block',
      },
      '& .MuiAccordionSummary-expandIcon': {
        transition: 'all 250ms linear',
      },
    },
  }),
)

type privacyProps = {
  hidden: boolean
  setPrivacy: React.Dispatch<React.SetStateAction<boolean>>
}

const Privacy: FC<privacyProps> = ({ hidden, setPrivacy }) => {
  const classes = useStyles()

  if (!hidden) {
    document.head.parentElement?.classList.add('html-scroll')
  }

  return (
    <div hidden={hidden} className={'privacy-overlay'}>
      <div className={'privacy-wrapper'}>
        <div className={'privacy-header'}>
          <Text.Paragraph className={'privacy-title'}>Privacy & Policy</Text.Paragraph>
        </div>
        <div className={'privacy-container'}>
          {privacyData.text.map((item, index) => (
            <div key={index} className={'privacy-header-text'}>
              <Text.Paragraph color={'primary'} weight={400} key={index}>
                {item}
              </Text.Paragraph>
              <br />
            </div>
          ))}
        </div>
        <Visible xs sm md lg>
          <div className={'privacy-container'}>
            {privacyData.items.map((item, index) => {
              return (
                <Accordion key={index} className={classes.root}>
                  <AccordionSummary expandIcon={<Plus />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Text.Paragraph
                      font={'secondary'}
                      weight={600}
                      style={{ fontSize: '16px', letterSpacing: '-0.8px' }}
                    >
                      {item.title}
                    </Text.Paragraph>
                  </AccordionSummary>
                  <AccordionDetails style={{ padding: '0' }}>
                    {item.sections.map((item, index) => {
                      return (
                        <div key={index}>
                          <Text.Paragraph style={{ marginBottom: '20px' }}>{item.title}</Text.Paragraph>
                          {item.description.map((item, index) => (
                            <Text.Paragraph key={index} style={{ marginBottom: '20px' }}>
                              {item}
                            </Text.Paragraph>
                          ))}
                          <ul style={{ listStyleType: 'disc', position: 'relative', paddingLeft: '20px' }}>
                            {item.items.map((item, index) => {
                              return (
                                <li key={index} style={{ color: '#ED6C68' }}>
                                  <Text.Paragraph>{item}</Text.Paragraph>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </Visible>
        <Visible xl xxl>
          <div className={'privacy-container'}>
            {privacyData.items.map((item, index) => (
              <div key={index} className={'privacy-data-wrapper'}>
                <Text.Paragraph size={'lg'} weight={600} font={'secondary'} style={{ marginBottom: '16px' }}>
                  {item.title}
                </Text.Paragraph>
                {item.sections.map((item, index) => (
                  <div key={index}>
                    <Text.Paragraph style={{ marginBottom: '20px' }}>{item.title}</Text.Paragraph>
                    {item.description.map((item, index) => (
                      <div key={index}>
                        <Text.Paragraph>{item}</Text.Paragraph>
                        <br />
                      </div>
                    ))}
                    <br />
                    <ul style={{ listStyleType: 'disc', position: 'relative', paddingLeft: '20px' }}>
                      {item.items.map((item, index) => (
                        <li style={{ color: '#ED6C68', marginBottom: '20px' }} key={index}>
                          <Text.Paragraph>{item}</Text.Paragraph>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Visible>
        <button
          onClick={() => {
            setPrivacy(!hidden)
          }}
          type={'button'}
          className={'privacy-close'}
        />
      </div>
    </div>
  )
}

export { Privacy }
