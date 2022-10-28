/* eslint-disable import/no-anonymous-default-export */

export default {
  control: {
    backgroundColor: '#fff',
    fontSize: 16
    // fontWeight: 'normal',
  },
  '&multiLine': {
    control: {
      minHeight: 90
    },
    highlighter: {
      padding: 9,
      border: '1px solid transparent'
    },
    input: {
      padding: 9,
      border: 'hidden'
    }
  },
  '&singleLine': {
    display: 'inline-block',
    width: 180,
    highlighter: {
      padding: 1,
      border: '2px inset transparent'
    },
    input: {
      padding: 1,
      border: '2px inset'
    }
  },
  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 16,
      borderRadius: '10px'
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#cee4e5'
      }
    }
  }
}
