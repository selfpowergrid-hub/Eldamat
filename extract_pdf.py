import fitz  # PyMuPDF
import os

# Open the PDF
pdf_path = "Eldamat_Company_Profile.pdf"
doc = fitz.open(pdf_path)

print("=" * 60)
print(f"PDF: {pdf_path}")
print(f"Pages: {len(doc)}")
print("=" * 60)

# Create images folder
os.makedirs("extracted_images", exist_ok=True)

# Extract text from each page
for page_num in range(len(doc)):
    page = doc[page_num]
    print(f"\n--- PAGE {page_num + 1} ---\n")
    text = page.get_text()
    print(text)
    
    # Extract images from page
    image_list = page.get_images()
    for img_idx, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"extracted_images/page{page_num + 1}_img{img_idx + 1}.{image_ext}"
        with open(image_name, "wb") as img_file:
            img_file.write(image_bytes)
        print(f"[Extracted image: {image_name}]")

doc.close()
print("\n" + "=" * 60)
print("Extraction complete!")
