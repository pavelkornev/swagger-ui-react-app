import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import EditorPreviewAsyncAPIPlugin from 'swagger-editor/plugins/editor-preview-asyncapi';

function App() {
  return (
    <SwaggerUI
      url="https://raw.githubusercontent.com/asyncapi/spec/v2.2.0/examples/streetlights-kafka.yml"
      plugins={[
        EditorPreviewAsyncAPIPlugin,
      ]}
    />
  );
}

export default App;
