<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
    id="container"
    style="heihgt:200px;border: 1px"
    >
    </div>
  </div>
</template>
<script>
require ("staticVs/basic-languages/monaco.contribution")
require ("staticVs/language/yaml/monaco.contribution")
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'demo'
    }
  },
  methods:{
    changeMsg(){
       this.msg="hello";
    },
    configureEditor() {
            const yaml = `apiVersion: apps/v1
              kind: Deployment
              metadata:
                name: nginx-deployment
                namespace: default
                labels:
                  app: nginx
              spec:
                replicas: 1
                selector:
                  matchLabels:
                    apps.deployment: nginx
                template:
                  metadata:
                    labels:
                      apps.deployment: nginx
                  spec:
                    containers:
                    - name: nginx
                      image: nginx:alpine`;
            var editor = monaco.editor.create(document.getElementById('container'), {
              value: yaml,
              language: 'yaml'
            });
            monaco.languages.yaml.yamlDefaults.setDiagnosticsOptions({
              enableSchemaRequest: true,
              validate: true,
              schemas: [
                {
                  uri: 'https://raw.githubusercontent.com/garethr/kubernetes-json-schema/master/master/deployment.json',
                  fileMatch: ['*'],
                },
              ],
            });
              
    }
  },
  created(){
   this.changeMsg();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
