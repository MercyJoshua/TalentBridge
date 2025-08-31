from fastapi import FastAPI


app = FastAPI(title="TalentBridge API", version="0.1")

# include routes
# app.include_router(auth.router, prefix="/auth", tags=["auth"])

@app.get("/")
def root():
    return {"message": "TalentBridge backend running 🚀"}
