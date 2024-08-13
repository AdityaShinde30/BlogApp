import React from 'react';
import { Editor } from "@tinymce/tinymce-react";

function SimpleEditor() {
  return (
    <Editor
      initialValue="Hello"
      init={{
        branding: false,
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table code help wordcount"
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        readonly: false // Ensure this is explicitly set to false
      }}
    />
  );
}

export default SimpleEditor;