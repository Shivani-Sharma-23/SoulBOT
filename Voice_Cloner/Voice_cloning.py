from transformers import AutoProcessor, BarkModel
import scipy

processor = AutoProcessor.from_pretrained("suno/bark")
model = BarkModel.from_pretrained("suno/bark")