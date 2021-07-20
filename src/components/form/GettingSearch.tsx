import { Button, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import { PageEntity } from '../../models/page'
import { Text } from '../index'
import './GettingSearch.less'

type searchProps = {
  data: PageEntity[]
}

const GettingSearch: FC<searchProps> = ({ data }) => {
  const useStyles = makeStyles(() => ({
    root: {
      '& .MuiFormLabel-root': {
        color: '#2D365C',
        opacity: '0.8',
      },
      '& .MuiInput-underline:after': {
        borderBottom: '1px solid #60C8D6',
      },
      '& .MuiInput-underline.Mui-focused:after': {
        borderBottom: '1px solid #60C8D6',
      },
      '& .MuiInputBase-input': {
        color: '#2D365C',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: '1px solid #2D365C',
      },
    },
  }))

  const classes = useStyles()
  const isMobileDevice = useMediaQuery({ maxWidth: 767 })
  const router = useRouter()
  const sections = data.flatMap(value =>
    value.sections.map(item => {
      return {
        title: item.title,
        uri: value.uri,
        id: item.id,
      }
    }),
  )
  const itemsWithoutNull = [...data, ...sections].filter(value => value.title !== null)

  return (
    <div
      style={isMobileDevice ? { padding: '0 16px', margin: '0 auto' } : { padding: '0 5px' }}
      className={'material-autocomplete'}
    >
      <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Autocomplete
          style={{ width: '100%' }}
          selectOnFocus
          blurOnSelect
          clearOnBlur
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          includeInputInList
          options={itemsWithoutNull}
          getOptionLabel={option => (typeof option === 'string' ? option : option.title)}
          renderOption={option => {
            const url =
              Object.keys(option).length < 5 ? `/docs${option.uri}#sections-${option.id}` : `/docs${option.uri}`
            return (
              <Text.Link
                key={url}
                onClick={() => {
                  router.push(url)
                  window.scrollTo(0, 0)
                }}
                style={{ color: '#000000', fontSize: 12, display: 'block', width: '100%', height: '100%' }}
                url={url}
              >
                {option.title}
              </Text.Link>
            )
          }}
          renderInput={params => (
            <TextField
              className={classes.root}
              {...params}
              margin='normal'
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        <Button
          type='button'
          style={{ padding: '0', width: '32px', height: '32px', minWidth: '32px', marginLeft: '8px' }}
        >
          <img alt='search-icon' src='../../assets/images/blog-search.svg' width='32' height='32' />
        </Button>
      </form>
    </div>
  )
}

export { GettingSearch }
