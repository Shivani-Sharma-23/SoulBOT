from transformers import AutoProcessor, BarkModel
import scipy

processor = AutoProcessor.from_pretrained("suno/bark")
model = BarkModel.from_pretrained("suno/bark")
model.to(cuda)
def generate_audio(text,preset,output):
    inputs=processor(text,voice_preset=preset)
    for k, v in inputs.items():
        inputs[k]=v.to("cuda")
    audio_arrray=model.generate(**inputs)
    audio_arrray=audio_arrray.cpu().numpy().squeeze()
    sample_rate=model.generation_config.sample_rate
    scipy.io.wavfile.write(output,rate=sample_rate,data=audio_arrray)
generate_audio(
    text="hi, welcome to soulbot world heal your inner child",
    preset="v2/en_speaker_9",
    output="output.wav",
)