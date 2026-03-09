import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const app = express()

app.use(express.json())

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HR Analytics API',
      version: '1.0.0',
      description: 'API du Dashboard RH'
    }
  },
  apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
  console.log('Swagger docs on http://localhost:5000/api-docs')
})