import SwaggerUI from "swagger-ui-react";
// import EditorContentTypePlugin from 'swagger-editor/plugins/editor-content-type';
// import EditorPreviewAsyncAPIPlugin from 'swagger-editor/plugins/editor-preview-asyncapi';
// import SwaggerUIAdapterPlugin from 'swagger-editor/plugins/swagger-ui-adapter';
import "swagger-editor/swagger-editor.css";
import asyncApiSpec from "./asyncapi.json";
// import restApiSpec from "./openapi.json";

function App() {
  return (
    <SwaggerUI
      spec={asyncApiSpec}
      plugins={[
        // EditorContentTypePlugin,
        // EditorPreviewAsyncAPIPlugin,
        // SwaggerUIAdapterPlugin,
        SwaggerUI.plugins.DownloadUrl,
      ]}
    />
  );
}

export default App
