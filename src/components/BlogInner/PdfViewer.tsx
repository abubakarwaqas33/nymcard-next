import { FC } from 'react'
import './PdfView.less'
import { Viewer, ProgressBar } from '@react-pdf-viewer/core'
const pdfjs = require('pdfjs-dist')
pdfjs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry.js')

interface Props {
  url: string
}

const PdfViewer: FC<Props> = (props: Props) => <Viewer 
fileUrl={`${props.url}`}    
renderLoader={() => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      marginTop: -24,
      width: '100%',
      height: '100vh',
    }}
  >
    <div className='loader'>
      <div className='spinner' />
      <div className='cube-container'>
        <div className='cube'>
          <div className='front' />
          <div className='back' />
          <div className='right' />
          <div className='left' />
          <div className='top' />
          <div className='bottom' />
        </div>
      </div>
    </div>
  </div>
)}

/>

export { PdfViewer }
