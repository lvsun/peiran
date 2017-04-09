import sys, string

def main(argv):
    inputfileUrl = argv + ""
    outputfileUrl = string.replace(inputfileUrl, '.html', 'Formatted.html')
    
    inputfile = open(inputfileUrl, 'r')
    outputfile = open(outputfileUrl, 'w')
    newline = ''
    for line in inputfile:
        if line == '\n':
            outputfile.write('')
            continue
        newline = string.replace(line, '\n', '')
        newline = string.replace(newline, '\"', '\\\"')
        newline = '\"' + newline + '\"' + ',' + '\n'
        outputfile.write(newline)
        print(newline)
    else:
        outputfile.write('')
    
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print('usage: python formatString.py <filename with .html>')
    else: 
        main(sys.argv[1])



