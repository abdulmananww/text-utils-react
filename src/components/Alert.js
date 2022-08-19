import React from 'react'

export default function Alert(props) {
  return (
    props.message && <div class={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
        <strong>{props.message.type[0].toUpperCase()+props.message.type.substring(1)}!</strong> {props.message.msg}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
