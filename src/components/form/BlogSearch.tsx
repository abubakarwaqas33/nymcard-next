import { Button, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { FC, useState } from 'react'
//import searchIcon from '../../assets/images/blog-search.svg'
import { PageEntity } from '../../models/page'
import { Text } from '../index'
import './GettingSearch.less'

type SearchProps = {
  data: PageEntity[]
}

const BlogSearch: FC<SearchProps> = ({ data }) => {
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
      '& .MuiFormControl-marginNormal': {
        marginTop: '0px',
        marginBottom: '0px',
      },
    },
  }))

  // const {posts,setPosts} = useState(data)
  const [posts, setPosts] = useState<PageEntity[]>(data)

  // console.log('blogsearch', data);
  

  const onInputChange = (value: string) => {
    setPosts(data.filter(post => post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
  }

  const classes = useStyles()

  return (
    <div style={{ width: '100%' }} className={'material-autocomplete'}>
      <form style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Autocomplete
          className={classes.root}
          style={{ width: '100%' }}
          blurOnSelect
          freeSolo
          autoComplete
          id='free-solo-2-demo'
          disableClearable
          includeInputInList
          options={posts}
          autoHighlight
          onInputChange={(e, value) => onInputChange(value)}
          getOptionLabel={option => (typeof option === 'string' ? option : option.title)}
          renderOption={option => (
            <React.Fragment>
              <Text.Link
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: '#000000', fontSize: '12px', display: 'block', width: '100%', height: '100%' }}
                url={`${option.category?.uri}/${option.uri}`}
              >
                {option.title}
              </Text.Link>
            </React.Fragment>
          )}
          renderInput={params => (
            <TextField
              label={'Search'}
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
          <img alt='search-icon' src={'/assets/images/blog-search.svg'} width='32' height='32' />
        </Button>
      </form>
    </div>
  )
}

export { BlogSearch }
