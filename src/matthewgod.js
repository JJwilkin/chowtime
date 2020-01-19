export async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('test.jpeg');
  const labels = result.labelAnnotations;
  const final = []
  labels.forEach(label => final.push(label.description));
  //console.log(final)
  return final;
}
//quickstart().catch((err) => console.log(err));
