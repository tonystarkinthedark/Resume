// This file would contain client-side PDF generation utilities if needed
// For now, PDF generation is handled server-side
export const downloadResume = async () => {
  try {
    const response = await fetch('/api/resume/download');
    if (!response.ok) {
      throw new Error('Failed to download resume');
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ahmed_Ibrahim_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    return { success: true };
  } catch (error) {
    console.error('PDF download error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
